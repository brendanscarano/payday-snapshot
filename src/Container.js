import React, { Component } from 'react';
import ViewLayer from './ViewLayer';
import colors from './utils/colors';

export default class Container extends Component {
    state = {
        date: 'April 21st, 2017',
        assets: {
            citiChecking: {
                name: 'Citi Checking',
                amount: 1000,
            },
            citiSaving: {
                name: 'Citi Saving',
                amount: 100,
            },
            chaseChecking: {
                name: 'Chase Checking',
                amount: 1000,
            },
            chaseSaving: {
                name: 'Chase Saving',
                amount: 100,
            },
        },
        debts: {
            discover: {
                name: 'discover',
                amount: 150,
            },
            chaseSaffire: {
                name: 'Chase Saffire',
                amount: 75,
            },
        }
    }

    get totalAssets() {
        const array = Object.keys(this.state.assets).map(key =>
            this.state.assets[key].amount
        );
        return reduce(array);
    }

    get totalDebts() {
        const array = Object.keys(this.state.debts).map(key =>
            this.state.debts[key].amount
        );
        return reduce(array);
    }

    addAsset = () => {
        this.setState({
            assets: {
                ...this.state.assets,
                '401k': {
                    name: '401k',
                    amount: 3000,
                }
            }
        })
    }

    render() {
        const { assets, debts } = this.state;

        return (
            <ViewLayer
                assets={assets}
                totalAssets={this.totalAssets}
                addAsset={this.addAsset}
                debts={debts}
                totalDebts={this.totalDebts}
            />
        )
    }
}

function reduce(array) {
    return array.reduce((acc, val) => acc += val, 0)
}

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

// const DATA = {
//     // 20170421: {
//         date: 'April 21st, 2017',
//         assets: {
//             citiChecking: {
//                 name: 'Citi Checking',
//                 amount: 1000,
//             },
//             citiSaving: {
//                 name: 'Citi Saving',
//                 amount: 100,
//             },
//             chaseChecking: {
//                 name: 'Chase Checking',
//                 amount: 1000,
//             },
//             chaseSaving: {
//                 name: 'Chase Saving',
//                 amount: 100,
//             },
//         },
//         debts: {
//             discover: {
//                 name: 'discover',
//                 amount: 150,
//             },
//             chaseSaffire: {
//                 name: 'Chase Saffire',
//                 amount: 75,
//             },
//         }
//     // }
// }
