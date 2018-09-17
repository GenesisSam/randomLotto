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
          width: 728,
          height: 90,
          marginBottom: 20,
        }}
        data-ad-client="ca-pub-0897003252521132"
        data-ad-slot="6421555199"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
    );
  }
}
