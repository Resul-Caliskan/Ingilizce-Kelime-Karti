import auth from 'firebase/auth';
const Auth = (email, password) => {
  auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log("User account created & signed in!");
      return "Basarili";
    })
    .catch((error) => {
      if (error.code === "auth/email-already-in-use") {
        console.log("That email address is already in use!");
        return "Kullanımda";
      }

      if (error.code === "auth/invalid-email") {
        console.log("That email address is invalid!");
        return "Gecersiz";
      }

      console.error(error);
    });
};
export default Auth;
