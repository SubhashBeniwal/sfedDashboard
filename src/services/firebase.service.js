import {firestore, auth} from "./firebase";


const db = firestore.collection("/tutorials");
const dbCommodity = firestore.collection("/commodity");
const dbSurveys = firestore.collection("/surveys");
const dbKisanSurveys = firestore.collection("/kisanSurveys");
const dbFarmbookSurveys = firestore.collection("/farmbookSurveys");
const dbRetailSurveys = firestore.collection("/retailSurveys");
const dbInputSurveys = firestore.collection("/inputSurvey");
const dbEquipmentSurveys = firestore.collection("/equipmentBooking");
const dbAnimalSurveys = firestore.collection("/animalFeedBooking");
const dbAds = firestore.collection("/ads");


class FirebaseDataService {
    getAll() {
        return db;
    }

    getSurveys(type) {
        switch (type) {
            case 'intern':
                return dbSurveys;
            case 'kisan':
                return dbKisanSurveys;
            case 'farmbook':
                return dbFarmbookSurveys;
            case 'retail':
                return dbRetailSurveys;
            case 'input':
                return dbInputSurveys;
            case 'animal':
                return dbAnimalSurveys;
            case 'equipment':
                return dbEquipmentSurveys;
            default:
                return "";
        }
    }

    deleteSurvey(id, type) {
        switch (type) {
            case 'intern':
                return dbSurveys.doc(id).delete();
            case 'kisan':
                return dbKisanSurveys.doc(id).delete();
            case 'farmbook':
                return dbFarmbookSurveys.doc(id).delete();
            case 'retail':
                return dbRetailSurveys.doc(id).delete();
            case 'input':
                return dbInputSurveys.doc(id).delete();
            case 'animal':
                return dbAnimalSurveys.doc(id).delete();
            case 'equipment':
                return dbEquipmentSurveys.doc(id).delete();
            default:
                return "";
        }
    }

    getSurvey(id, type) {
        switch (type) {
            case 'intern':
                console.log('intern')
                return (dbSurveys.doc(id).get());
            case 'kisan':
                return dbKisanSurveys.doc(id).get();
            case 'farmbook':
                return dbFarmbookSurveys.doc(id).get();
            case 'retail':
                return dbRetailSurveys.doc(id).get();
            case 'input':
                return dbInputSurveys.doc(id).get();
            case 'animal':
                return dbAnimalSurveys.doc(id).get();
            case 'equipment':
                return dbEquipmentSurveys.doc(id).get();
            default:
                return "";
        }
    }

    checkLogin(history) {
        auth.onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                // console.log(user);
            } else {
                // No user is signed in.
                // console.log("logged out");
                history.push("/")

            }
        });
    }

    create(tutorial) {
        return db.add(tutorial);
    }

    login(data) {
        return auth.signInWithEmailAndPassword(data.email, data.password)
    }

    update(id, value) {
        return db.doc(id).update(value);
    }

    updateCommodity(id, value) {
        return dbCommodity.doc(id).update(value);
    }

    setCommodity(id, value) {
        return dbCommodity.doc(id).set(value);
    }

    updateBanner(id, value) {
        return dbAds.doc(id).update(value);
    }

    delete(id) {
        return db.doc(id).delete();
    }
}

export default new FirebaseDataService();