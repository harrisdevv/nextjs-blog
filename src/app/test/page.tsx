'use client'
import AnimatedNavbar from '@/component/AnimateNavbar'
import TestComponent from '@/component/Test'
import React, { Component } from 'react'

type Props = {}

type State = {}

export default class page extends Component<Props, State> {
  state = {}

  render() {
    return (
      // <AnimatedNavbar />
      <TestComponent />
    )
  }
}