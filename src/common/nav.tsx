import React from "react";

interface OwnProps {
  items: ReadonlyArray<{ tab: string; clickFunction: () => void }>;
  active: string;
  disabled: ReadonlyArray<string>;
}

export type NavProps = OwnProps;

class Nav extends React.PureComponent<NavProps> {
  public render() {
    const { items, active, disabled } = this.props;

    return (
      <ul className="nav nav-tabs">
        {items.map((item) => (
          <li className="nav-item">
            <button
              className={`nav-link ${item.tab === active ? "active" : ""} ${
                disabled.includes(item.tab) ? "disabled" : ""
              }`}
              onClick={item.clickFunction}
            >
              {item.tab}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Nav;
