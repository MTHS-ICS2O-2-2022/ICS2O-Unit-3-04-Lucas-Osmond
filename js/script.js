// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Lucas Osmond
// Created on: March 2023
// This file contains the JS functions for index.html 

'use strict'
/**
 * This function calculates area and perimeter of triangle.
 */
function calculate () {
  // input
  const fahrenheit = parseFloat(document.getElementById('fahrenheit').value)

  // process
  const celsius = (fahrenheit-32) * 5/9 

  // output
  document.getElementById('area').innerHTML = 'celsius is: ' + celsius + '℃'
}
