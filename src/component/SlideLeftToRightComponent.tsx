import { Variants, motion } from "framer-motion";
import React, { Component } from "react";

type Props = {
  x: number;
  duration: number;
  children: React.ReactNode;
};

type State = {};

export default class SlideLeftToRightComponent extends Component<Props, State> {
  static defaultProps = {
    x: -100,
    duration: 1,
  };

  state = {};

  slideInFromLeft: Variants = {
    hidden: { opacity: 0, x: this.props.x },
    visible: { opacity: 1, x: 0 },
  };

  render() {
    const { duration } = this.props;
    return (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={this.slideInFromLeft}
        transition={{ duration }}
        className="w-full inline-block"
      >
        {this.props.children}
      </motion.div>
    );
  }
}
