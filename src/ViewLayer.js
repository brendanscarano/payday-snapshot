import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button
} from 'react-native';
import colors from './utils/colors';

export default function ViewLayer(props) {
    console.log("props", props);
    const { assets, debts } = props;

    return (
        <View style={styles.container}>
            {Object.keys(assets).map(assetKey => {
                return (
                <View key={assets[assetKey].name} style={[styles.row, styles.green]}>
                    <Text>{assets[assetKey].name}</Text>
                    <TextInput
                        style={{height: 20, width: 100, borderWidth: 2, borderColor: "blue"}}
                        placeholder={assets[assetKey].amount.toString()}
                        value={assets[assetKey].amount.toString()}
                        keyboardType="numeric"
                    />
                </View>
                )}
            )}

            <Text>New Asset</Text>
            <View style={styles.row}>
                <TextInput
                    style={{height: 20, width: 100, borderWidth: 2, borderColor: "blue"}}
                    placeholder="New Asset Name"
                />
                <TextInput
                    style={{height: 20, width: 100, borderWidth: 2, borderColor: "blue"}}
                    placeholder="New Asset Value"
                    keyboardType="numeric"
                />
            </View>
            <Button
                title="Add New Asset"
                onPress={props.addAsset}
            />

            <View style={[styles.row, styles.green]}>
                <Text>Total Assets</Text>
                <Text>{props.totalAssets}</Text>
            </View>

            {Object.keys(debts).map(debtKey => (
                <View key={debts[debtKey].name} style={[styles.row, styles.red]}>
                    <Text>{debts[debtKey].name}</Text>
                    <Text>{debts[debtKey].amount}</Text>
                </View>
            ))}

            <View style={[styles.row, styles.red]}>
                <Text>Total Debts</Text>
                <Text>{props.totalDebts}</Text>
            </View>

            <View style={styles.row}>
                <Text>True Balance</Text>
                <Text>{props.totalAssets - props.totalDebts}</Text>
            </View>
        </View>
    )
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
