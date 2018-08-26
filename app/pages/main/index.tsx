import * as React from "react";

const styles = require("./main.scss");

interface IState {
  generateGame: number;
}

export default class MainPage extends React.PureComponent<any, IState> {
  public state: IState = {
    generateGame: 1,
  };

  public render() {
    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.header}>
          <span className={styles.title}>로또 번호 생성기</span>
        </div>

        <div className={styles.content}>{this.renderContent()}</div>
        <div className={styles.footer}>
          <div>
            Created by <a href="https://github.com/GenesisSam">GenesisSam</a>
          </div>
          <div>
            건의 및 문의: <a href="mailto:samuel940401@gmail.com">GenesisSam</a>
          </div>
        </div>
      </div>
    );
  }

  private renderContent = () => {
    return (
      <div>
        <div className={styles.options}>
          Game:
          <select
            onChange={this.handleGameCountChange}
            value={this.state.generateGame}
          >
            <option value="1">1</option>

            <option value="2">2</option>

            <option value="3">3</option>

            <option value="4">4</option>

            <option value="5">5</option>
          </select>
          <input type="button" value="재생성" />
        </div>
        <div className={styles.line}>11 22 33 44 12 13 35</div>

        <div className={styles.line}>11 22 33 44 12 13 35</div>

        <div className={styles.line}>11 22 33 44 12 13 35</div>

        <div className={styles.line}>11 22 33 44 12 13 35</div>

        <div className={styles.line}>11 22 33 44 12 13 35</div>
      </div>
    );
  };

  private handleGameCountChange: React.ChangeEventHandler<
    HTMLSelectElement
  > = e => {
    const selectedValue = e.currentTarget.value;

    if (this.state.generateGame.toString() !== selectedValue) {
      this.setState({
        generateGame: parseInt(selectedValue, 10),
      });
    }
  };
}
