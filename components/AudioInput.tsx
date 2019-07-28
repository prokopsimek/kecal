import * as React from "react";
import { withNamespaces } from "../server/i18n";

interface AudioInputProps {}

class AudioInput extends React.Component<AudioInputProps, any> {
  constructor(props: AudioInputProps) {
    super(props);

    this.state = { showModal: false, currentLanguage: undefined };
  }

  componentDidMount() {
    // const url = window.location.href;
    // const filename = url.substring(url.lastIndexOf("/") + 1);
    // if (filename === "#thx") {
    //   this.setState({ showModal: true });
    // }
  }

  playSound = async (e: any) => {
    e.preventDefault();
    // for (const sound of ["../static/sounds/a.m4a", "../static/sounds/b.m4a"]) {
    //   const audio = new Audio(sound);
    //   await audio.play();
    // }

    // const sounds = [
    //   new Audio("../static/sounds/a.m4a"),
    //   new Audio("../static/sounds/b.m4a")
    // ];

    const sounds = new Array(
      new Audio("../static/sounds/b.m4a"),
      new Audio("../static/sounds/b.m4a"),
      new Audio("../static/sounds/a.m4a"),
      new Audio("../static/sounds/b.m4a"),
      new Audio("../static/sounds/a.m4a"),
      new Audio("../static/sounds/a.m4a"),
      new Audio("../static/sounds/b.m4a"),
      new Audio("../static/sounds/a.m4a"),
      new Audio("../static/sounds/b.m4a"),
      new Audio("../static/sounds/b.m4a"),
      new Audio("../static/sounds/b.m4a"),
      new Audio("../static/sounds/b.m4a")
    );

    let i = -1;
    playSound();

    function playSound() {
      i++;
      if (i == sounds.length) return;
      sounds[i].addEventListener("ended", playSound);
      sounds[i].play();
    }
  };

  render() {
    return (
      <React.Fragment>
        <h1>AAA</h1>
        <input name="audio" type="text" onClick={this.playSound} />
      </React.Fragment>
    );
  }
}

export default withNamespaces("common")(AudioInput);
