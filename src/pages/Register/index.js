import React, { Component } from 'react';
import { Container, Label, Button, TextButton, Input, Form } from './style';
import SQLite from 'react-native-sqlite-storage';

var db = SQLite.openDatabase({
  name: 'tasks.db',
  location: 'default'
});
export default class Register extends Component {
  state = {
    name: ""
  }

  componentDidMount() {
    SQLite.enablePromise(true);
    SQLite.DEBUG(true);
  }

  registerItem = () => {
    db.transaction(txn => {
      console.log("executado");
      txn.executeSql(
        "INSERT INTO tasks (name) VALUES(?)",
        [this.state.name],
        (tx, result) => {
         let rows = result.rowsAffected;
          console.log("INSERT =>> ", rows);
          if (rows > 0) {
            alert("Tarefa adicionada com sucesso");
          } else {
            alert("Tarefa falha ao adicionar tarefa");
          }
        }
      )
    })
  }

  render() {
    return (
      <Container>
        <Form>
          <Label>Nome da tarefa</Label>
          <Input
            placeholder="Nome da tarefa"
            onChangeText={value => this.setState({ name: value })}
          />
          <Button onPress={this.registerItem}><TextButton>Cadastrar</TextButton></Button>
        </Form>

        <Button onPress={() => {
          this.props.navigation.navigate('Main');
        }}>
          <TextButton>Voltar</TextButton>
        </Button>
      </Container>);
  }
}
