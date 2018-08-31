import * as React from "react";

export default class Adsense extends React.Component {
  public componentDidMount() {
    if (window) {
      (window.adsbygoogle = window.adsbygoole || []).push({});
    }
  }

  public render() {
    return (
      <ins
        className="adsbygoogle"
        style={{
          display: "block",
        }}
        data-ad-client="ca-pub-0897003252521132"
        data-ad-slot="1515316670"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}
