import React from "react";
import { connect, ConnectedProps } from "react-redux";
import { StoreState } from "../redux-common/store";
import Card from "../common/card";
import ListGroup from "../common/list-group";

export type MessageFeedProps = ConnectedProps<typeof connector>;

class MessageFeed extends React.PureComponent<MessageFeedProps> {
  public render() {
    const { messages = [] } = this.props;
    return (
      <Card title="Word on the street" className="message-feed-card">
        <ListGroup
          className="message-feed-items"
          items={[...messages].reverse().map((message) => ({
            item: <div>{message}</div>
          }))}
        ></ListGroup>
      </Card>
    );
  }
}

export const mapState = (state: StoreState) => ({
  messages: state.messages
});

const connector = connect(mapState);

export default connector(MessageFeed);
