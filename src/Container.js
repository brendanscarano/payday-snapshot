import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import colors from './utils/colors';

const DATA = {
    20170421: {
        date: 'April 21st, 2017',
        assets = {
            citiChecking: {
                title: Citi Checking,
                amount: 1000,
            },
            citiSaving: {
                title: Citi Saving,
                amount: 100,
            },
            chaseChecking: {
                title: Chase Checking,
                amount: 1000,
            },
            chaseSaving: {
                title: Chase Saving,
                amount: 100,
            },
        }
        debts = {
            discover: {
                title: discover,
                amount: 150,
            },
            chaseSaffire: {
                title: Chase Saffire,
                amount: 75,
            },
        }
    }
}


export default class Container extends Component {
    state = {
        data: DATA
    }

    get totalAssets() {
        return reduce(this.state.data.assets);
    }

    get totalDebts() {
        return reduce(this.state.data.debts);
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.data.assets.map(asset => (
                    <View key={asset.name} style={[styles.row, styles.green]}>
                        <Text>{asset.name}</Text>
                        <TextInput
                            style={{height: 20, width: 100, borderWidth: 2, borderColor: "blue"}}
                            placeholder={asset.amount.toString()}
                            value={asset.amount.toString()}
                            keyboardType="numeric"
                        />
                    </View>
                ))}

                <View style={[styles.row, styles.green]}>
                    <Text>Total Assets</Text>
                    <Text>{this.totalAssets}</Text>
                </View>

                {this.state.data.debts.map(debt => (
                    <View key={debt.name} style={[styles.row, styles.red]}>
                        <Text>{debt.name}</Text>
                        <Text>{debt.amount}</Text>
                    </View>
                ))}

                <View style={[styles.row, styles.red]}>
                    <Text>Total Debts</Text>
                    <Text>{this.totalDebts}</Text>
                </View>

                <View style={styles.row}>
                    <Text>True Balance</Text>
                    <Text>{this.totalAssets - this.totalDebts}</Text>
                </View>
            </View>
        )
    }
}

function reduce(array) {
    return array.reduce((acc, val) => acc += val.amount, 0)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#fff',

    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    green: {
        backgroundColor: colors.backgroundGreen
    },
    red: {
        backgroundColor: colors.backgroundRed
    }
});

// const DATA = {
//     date: 'April 21st, 2017',
//     assets: [
//         {
//             name: 'Citi Checking',
//             amount: 1000
//         },
//         {
//             name: 'Citi Savings',
//             amount: 100
//         },
//         {
//             name: 'Chase Checking',
//             amount: 2000
//         },
//         {
//             name: 'Chase Savings',
//             amount: 500
//         }
//     ],
//     debts: [
//         {
//             name: 'Discover',
//             amount: 150
//         },
//         {
//             name: 'Chase Saffarie',
//             amount: 75
//         }
//     ],
// }
