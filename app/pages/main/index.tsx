import * as React from "react";
import generateRandomLotto from "app/utils/generateRandomLotto";
import rangeColorSwitch from "./helpers/rangeColorSwitch";
import Adsense from "app/components/adsense";

const styles = require("./main.scss");

export default class MainPage extends React.PureComponent {
  private readonly randomGames = generateRandomLotto(5);

  public render() {
    return (
      <div className={styles.bodyWrapper}>
        <div className={styles.header}>
          <span className={styles.title}>로또 번호 생성기</span>
        </div>

        <div className={styles.content}>
          <Adsense />
          {this.renderContent()}
        </div>
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
      <div className={styles.lottoContent}>
        {this.randomGames.map(line => {
          return (
            <React.Fragment>
              <div className={styles.line}>
                {line.map(num => {
                  return (
                    <div
                      className={styles.number}
                      style={{ backgroundColor: rangeColorSwitch(num) }}
                    >
                      <span>{num}</span>
                    </div>
                  );
                })}
              </div>
              <div className={styles.horizontalBar} />
            </React.Fragment>
          );
        })}
      </div>
    );
  };
}
