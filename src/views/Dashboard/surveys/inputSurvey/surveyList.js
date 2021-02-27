import React, {Component} from "react";
import FirebaseDataService from "../../../../services/firebase.service";
import {Table, Button} from 'reactstrap';
import {auth} from "../../../../firebase";

export default class InputSurvey extends Component {

    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveTutorial = this.saveCommodities.bind(this);
        // this.newTutorial = this.newTutorial.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
        this.deleteSurvey = this.deleteSurvey.bind(this);
        this.openSurvey = this.openSurvey.bind(this);


        this.state = {
            surveyList: [],
        };
        auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in.
                // console.log(user);
            } else {
                // No user is signed in.
                // console.log("logged out");
                props.history.push("/login")
            }
        });
    }

    componentDidMount() {
        // this.unsubscribe = FirebaseDataService.getSurveys().orderBy("title", "asc").onSnapshot(this.onDataChange);
        this.unsubscribe = FirebaseDataService.getSurveys('input').onSnapshot(this.onDataChange);
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    onDataChange(items) {
        let surveys = [];

        items.forEach((item) => {
            // let id = item.id;
            let data = item.data();
            surveys.push(data);
        });

        this.setState({
            surveyList: surveys,
        });
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value,
        });
    }

    onChangeDescription(e) {
        this.setState({
            all: e.target.value,
        });
    }

    groupArrayOfObjects(list, key) {
        return list.reduce(function (rv, x) {
            (rv[x[key]] = rv[x[key]] || []).push(x);
            return rv;
        }, {});
    }

    saveCommodities() {
        let list = JSON.parse(this.state.all);
        let states = this.groupArrayOfObjects(list, 'state');
        let keys = Object.keys(states);
        keys.forEach(key => {
            this.pushState(key, {all: JSON.stringify(states[key])});
        });
    }

    pushState(state, data) {
        FirebaseDataService.setCommodity(state, data)
            .then(() => {
                // console.log("Updated commodities successfully!");
                this.setState({
                    submitted: true,
                });
            })
            .catch((e) => {
                console.log(e);
            });
    }

    deleteSurvey(id) {
        FirebaseDataService.deleteSurvey(id, 'input')
            .then(() => {
                // console.log("Deleted survey successfully!");
            })
            .catch((e) => {
                console.log(e);
            });
    }

    openSurvey(id) {
        this.props.history.push("/surveys/input/" + id)
    }

    _getDateTime(time) {
        return time ? (new Date(time).toDateString() + " - " + new Date(time).toLocaleTimeString()) : 'NA'
    }

    render() {
        return (
            <Table hover bordered>
                <thead>
                <tr>
                    <th>#</th>
                    <th>ID</th>
                    <th>Farmer's ID</th>
                    <th>Farmer's Name</th>
                    <th>Time</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {this.state.surveyList.map((item, index) => {
                    return <tr key={item.id}>
                        <td>{index + 1}</td>

                        <td scope="row">{item['id']}</td>
                        <td scope="row">{item['farmerId']}</td>
                        <th scope="row">{item['farmerName']}</th>
                        <td scope="row">{item['time']}</td>

                        <td className="text-right"><Button onClick={(e) => {
                            e.preventDefault()
                            this.deleteSurvey(item.id)
                        }} outline size="sm" color="danger">
                            Delete</Button>
                            <hr/>
                            <Button onClick={(e) => {
                                e.preventDefault()
                                this.openSurvey(item.id)
                            }} outline size="sm" color="primary">
                                View</Button>
                        </td>
                    </tr>;
                })}

                </tbody>
            </Table>
        );
    }

}