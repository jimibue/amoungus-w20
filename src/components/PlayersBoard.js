import { Header, Table, Button, Image } from "semantic-ui-react";

export default (props) => {
  const renderPlayers = () => props.players.map((p) => renderPlayer(p));

  const renderPlayer = (player) => {
    return (
      <Table.Row>
        <Table.Cell>
          <Header as="h4" image>
            <Image
              src="https://react.semantic-ui.com/images/avatar/small/lena.png"
              rounded
              size="mini"
            />
            <Header.Content>
              {player.name}
              <Header.Subheader>{player.nickname}</Header.Subheader>
            </Header.Content>
          </Header>
        </Table.Cell>
        <Table.Cell>
          {player.total_games}
          <Button color="green" size="tiny" icon="plus"></Button>
        </Table.Cell>
        <Table.Cell>
          {player.times_imposter}
          <Button color="green" size="tiny" icon="plus"></Button>
        </Table.Cell>
        <Table.Cell>
          {player.imposter_wins}
          <Button color="green" size="tiny" icon="plus"></Button>
        </Table.Cell>
        <Table.Cell>
          {player.times_crew}
          <Button color="green" size="tiny" icon="plus"></Button>
        </Table.Cell>
        <Table.Cell>
          {player.crew_wins}
          <Button color="green" size="tiny" icon="plus"></Button>
        </Table.Cell>
      </Table.Row>
    );
  };
  return (
    <>
      <h1>Players Board</h1>
      <Table basic="very" celled collapsing>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Player</Table.HeaderCell>
            <Table.HeaderCell>Total Games</Table.HeaderCell>
            <Table.HeaderCell>Times Imposter</Table.HeaderCell>
            <Table.HeaderCell>Imposter Wins</Table.HeaderCell>
            <Table.HeaderCell>Times Crew</Table.HeaderCell>
            <Table.HeaderCell>Crew Wins</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{renderPlayers()}</Table.Body>
      </Table>
    </>
  );
};
