import React, { Component } from 'react'
import cat from './backpackCatWeb-234x234.jpg'
import "./Owner.css"

export default class OwnerList extends Component {
  render () {
      return (
          <section className="owners">
          {
              this.props.owners.map(owner =>
                  <div key={owner.id} className="card">
                      <div className="card-body">
                          <h5 className="card-title">
                              <img src={cat} className="icon--owner" alt="stupid" />
                              {owner.name}
                              <a
                                  href="#"
                                  onClick={() => this.props.deleteOwner(owner.id)}
                                  className="card-link">Delete</a>
                          </h5>
                      </div>
                  </div>
              )
          }
          </section>
      )
  }
}