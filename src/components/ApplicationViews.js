import { Route } from 'react-router-dom'
import React, { Component } from "react"
import AnimalList from './animals/AnimalList'
import LocationList from './location/LocationList'
import EmployeeList from './employee/EmployeeList'
import OwnerList from './owners/OwnerList'
import AnimalManager from "../modules/AnimalManager"
import EmployeeManager from '../modules/EmployeeManager';
import LocationManager from '../modules/LocationManager';
import OwnerManager from '../modules/OwnerManager';


export default class ApplicationViews extends Component {
    state = {
        animals: [],
        employees: [],
        locations:[],
        owners:[]
    }

    componentDidMount() {
        
        AnimalManager.getAll().then(allAnimals => {
            this.setState({
                animals: allAnimals
            })
        })
        EmployeeManager.getAll().then(allEmployees => {
            this.setState({
                employees: allEmployees
            })
        })
        LocationManager.getAll().then(allLocations => {
            this.setState({
                locations: allLocations
            })
        })
        OwnerManager.getAll().then(allOwners => {
            this.setState({
                owners: allOwners
            })
        })
    }

    //     fetch("http://localhost:5002/animals")
    //         .then(r => r.json())
    //         .then(animals => newState.animals = animals)
    //         .then(() => fetch("http://localhost:5002/employees")
    //         .then(r => r.json()))
    //         .then(employees => newState.employees = employees)
    //         .then(() => fetch("http://localhost:5002/locations")
    //         .then(r => r.json()))
    //         .then(locations => newState.locations = locations)
    //         .then(() => fetch("http://localhost:5002/owners")
    //         .then(r => r.json()))
    //         .then(owners => newState.owners = owners)
    //         .then(() => this.setState(newState))
    // }


    deleteAnimal = (id) => {
        return AnimalManager.removeAnimal(id)
        .then(animals => this.setState({
            animals: animals
        }))
    }

    deleteEmployee = id => {
        return EmployeeManager.removeOwner(id)
        .then(employees => this.setState({
            employees: employees
        }))
    }

    deleteOwner = id => {
        return OwnerManager.removeOwner(id)
        .then(owners => this.setState({
            owners: owners
        }))
    }
    render() {
        return (
            <React.Fragment>
                <Route exact path="/" render={(props) => {
                    return <LocationList locations={this.state.locations} />
                }} />
                <Route exact path="/animals" render={(props) => {
                    return <AnimalList deleteAnimal={this.deleteAnimal} animals={this.state.animals} />
                }} />
                <Route exact path="/employees" render={(props) => {
                    return <EmployeeList deleteEmployee={this.deleteEmployee} employees={this.state.employees} />
                }} />
                <Route exact path="/owners" render={(props) => {
                    return <OwnerList deleteOwner={this.deleteOwner} owners={this.state.owners} />
                }} />

            </React.Fragment>
        )
    }
}