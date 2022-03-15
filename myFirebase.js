class MyFirebase {

    TheUser = null;

    constructor() {
        console.log("Hello from MyFirebase!");
        document.addEventListener("DOMContentLoaded", event => {
            const app = firebase.app();
            firebase.auth().onAuthStateChanged(auth => {
                this.setLoginStatus(auth);
            });
        });
    }

    githubLogin() {
        var provider = new firebase.auth.GithubAuthProvider();

        provider.setCustomParameters({
            prompt: 'select_account' // this makes it re-ask which user
        });

        firebase
            .auth().signInWithPopup(provider)
            .then((result) => {
                this.TheUser = result.additionalUserInfo.username
                console.log("Logged into Github as: ", this.TheUser);
            }).catch((error) => {
                console.log("An error occured loggin in: ", error);
            });
    }

    googleLogin() {
        const provider = new firebase.auth.GoogleAuthProvider();

        provider.setCustomParameters({
            prompt: 'select_account' // this makes it re-ask which user
        });

        firebase.auth().signInWithPopup(provider)
            .then(result => {
                this.TheUser = result.user;
                console.log("Logged in to Google as: ", this.TheUser.displayName);
            })
            .catch((error) => {
                console.log("An error occured logging in: ", error);
            })
    }

    logout() {
        firebase.auth().signOut().then(() => {
            console.log("Logged out.");
        }).catch((error) => {
            console.log("An error occured logging out: ", error);
        })
    }

    setLoginStatus(user) {
        // turn on/off the approperate classes
        let loginWaitElms = Array.from(document.getElementsByClassName("LoginWait"));
        let loginYesElms = Array.from(document.getElementsByClassName("LoginYes"));
        let loginNoElms = Array.from(document.getElementsByClassName("LoginNo"));

        if (user == null) {
            loginWaitElms.forEach(element => this.hide(element));
            loginYesElms.forEach(element => this.hide(element));
            loginNoElms.forEach(element => this.show(element));
        } else {
            loginWaitElms.forEach(element => this.hide(element));
            loginNoElms.forEach(element => this.hide(element));
            loginYesElms.forEach(element => this.show(element));
        }

        this.TheUser = user;

        // find username and replace innerHTML with the username
        let username = (user) ? user.displayName : "";
        let usernameElms = Array.from(document.getElementsByClassName("Username"));
        usernameElms.forEach(element => element.innerHTML = username);

    }

    hide(element) {
        element.style.display = "none";
    }

    show(element) {
        element.style.display = "block";
    }

};

var myFirebase = new MyFirebase(); // TODO make this a singleton...