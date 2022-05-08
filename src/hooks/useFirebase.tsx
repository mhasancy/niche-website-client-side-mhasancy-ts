//imported file
import axios from "axios";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/user-authorize/firebase/firebase.init";

//firebase initialization
initializeAuthentication();

//useFirebase hooks
const useFirebase = () => {
  const auth: any = getAuth();
  //states
  const [user, setUser] = useState({} as any);
  const [usersData, setUsersData] = useState([]);
  const [emailData, setEmailData] = useState("");
  const [passwordData, setPasswordData] = useState("");
  const [nameData, setNameData] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [admin, setAdmin] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const googleProvider = new GoogleAuthProvider();

  //admin check
  useEffect(() => {
    axios
      .get(`https://quiet-cliffs-65550.herokuapp.com/users/${user?.email}`)
      .then((res) => {
        setAdmin(res?.data.admin);
      });
  }, [user?.email]);

  //googleSignIn
  const googleSignIn = (location: any, history: any) => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        const user: any = result.user;
        saveUser(user.email, user.displayName, "put");
        setError("");
        const destination = location?.state?.from || "/";
        history.replace(destination);
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  //user creation with email
  const emailSignup = (
    email: string,
    password: string,
    name: string,
    history: any
  ) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((results) => {
        setError("");
        const userDataNew = { email, displayName: name };
        setUser(userDataNew);
        saveUser(email, name, "post");
        updateProfile(auth.currentUser, {
          displayName: name,
        });
        history.replace("/");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/email-already-in-use).") {
          setError(
            "Email already used, please log in or try again with a new email."
          );
        } else {
          setError(error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };
  //users data load
  useEffect(() => {
    axios.get("https://quiet-cliffs-65550.herokuapp.com/users").then((res) => {
      setUsersData(res?.data);
    });
  }, [user]);
  // users data saving to database
  const saveUser = (email: string, displayName: string, method: any) => {
    if (method === "post") {
      axios
        .post("https://quiet-cliffs-65550.herokuapp.com/users", {
          email,
          displayName,
        })
        .then();
    } else if (method === "put") {
      axios
        .put("https://quiet-cliffs-65550.herokuapp.com/users", {
          email,
          displayName,
        })
        .then();
    }
  };

  //email login
  const emailLogin = (
    email: string,
    password: string,
    location: any,
    history: any
  ) => {
    setError("");
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        if (error.message === "Firebase: Error (auth/wrong-password).") {
          setError("Wrong password, please try again or reset password.");
        } else if (error.message === "Firebase: Error (auth/user-not-found).") {
          setError("User not found, please check your email or signup.");
        } else {
          setError(error.message);
        }
      })
      .finally(() => setIsLoading(false));
  };

  //logout
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .finally(() => setIsLoading(false));
  };

  //set error handle empty
  const errorDataClear = () => {
    setError("");
  };
  //observer
  useEffect((): any => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribed;
  }, [auth]);

  return {
    emailData,
    nameData,
    passwordData,
    isLoading,
    user,
    error,
    admin,
    success,
    usersData,
    setIsLoading,
    setEmailData,
    setPasswordData,
    setNameData,
    setUser,
    setError,
    googleSignIn,
    logOut,
    emailLogin,
    emailSignup,
    errorDataClear,
    setSuccess,
  };
};
export default useFirebase;
