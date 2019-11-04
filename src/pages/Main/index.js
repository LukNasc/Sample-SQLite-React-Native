import React, { Component } from 'react';
import { FlatList } from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header';
import { Container, Button, TextButton, ItemList, TextList } from './style';
var db = SQLite.openDatabase({
    name: 'tasks.db',
    location: 'default'
});
export default class Main extends Component {
    state = {
        tasks: []
    }

    componentDidMount() {
        SQLite.enablePromise(true);
        SQLite.DEBUG(true);
        this.gettasks();
    }
    constructor(props) {
        super(props);
        db.transaction(txn => {
            console.log("to aqui");
            txn.executeSql("CREATE TABLE IF NOT EXISTS tasks(id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL);",
                [],
                (tx, result) => {
                    console.log("CREATE =>> ",result);
                });
        })
    }

    gettasks = () => {
        db.transaction(
            txn => {
                txn.executeSql(
                    "SELECT * FROM tasks",
                    [],
                    (tx, result) => {
                        console.log("SELECT =>>",result);
                        var temp = [];
                        for (let i = 0; i < result.rows.length; i++) {
                            temp.push(result.rows.item(i));
                        }
                        this.setState({ tasks: temp });
                        console.log("TEMP =>> ",this.state.tasks);
                    }
                )
            }
        )
    }

    render() {
        return (
            <Container>
                <Header />

                <FlatList
                    style={{
                        flex: 1
                    }}
                    data={this.state.tasks}
                    key={item=>item}
                    keyExtractor={({item})=> { item}}
                    renderItem={({item}) => (
                        <ItemList>
                            {console.log(item.name)}
                            <TextList>{item.name}</TextList>
                        </ItemList>
                    )}
                />
                <Button onPress={() => {
                    this.props.navigation.navigate('Register');
                }}>
                    <TextButton>Cadastrar Nova</TextButton>
                </Button>
            </Container>
        );
    }
}
