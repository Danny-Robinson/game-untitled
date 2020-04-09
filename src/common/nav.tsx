import React from "react";

interface OwnProps {
  items: ReadonlyArray<{ tabName: string; clickFunction: () => void }>;
  active: string;
  disabled: ReadonlyArray<string>;
}

export type NavProps = OwnProps;

class Nav extends React.PureComponent<NavProps> {
  public render() {
    const { items, active, disabled } = this.props;

    return (
      <ul className="nav nav-tabs">
        {items.map((item, index) => (
          <li className="nav-item" key={`nav-item-${index}`}>
            <button
              className={`nav-link ${item.tabName === active ? "active" : ""} ${
                disabled.includes(item.tabName) ? "disabled" : ""
              }`}
              onClick={item.clickFunction}
            >
              {item.tabName}
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default Nav;
