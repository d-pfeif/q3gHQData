const express = require('express');
const db = require('./connection')

function getUsers() {
  return db('users').select()
}

function getOneUser(id) {
  return db('users').select().where('id', id)
}

function getCohorts() {
  return db('cohorts').select()
}

function getOneCohort(id) {
  return db('cohorts').select().where('id', id)
}

function daily() {
  return db('daily_plan').select()
}

function oneDaily(id) {
  return db('daily_plan').select().where('id', id)
}

module.exports = {
  getUsers,
  getOneUser,
  getCohorts,
  getOneCohort,
  daily,
  oneDaily
}
