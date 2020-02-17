import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { CategoryName } from '../index';
// import IntXipt from '../int_xipt';
import IntXipt from './index.js';

const selectionData = [
    {
        type: 'text',
        placeholder: '請輸入文字',
        value: 'text here',
    },
    {
        type: 'text',
        placeholder: '請輸入文字',
    },
    {
        type: 'select',
        placeholder: '請輸入文字',
        value: '12312312312',
        selectionData: [
            { text: '1', value: 1 },
            { text: '2', value: 2 },
            { text: '3', value: 3 },
            { text: '4', value: 4 },
            { text: '5', value: 5 },
        ],
    },
    {
        type: 'radio',
        name: 'gender',
        selectionData: [
            { text: '男', value: 'M' },
            { text: '女', value: 'F' },
        ],
    },
    {
        type: 'checkbox',
        placeholder: '請輸入文字',
        value: '12312312312',
    },
];

const renderComponent = (arrData) =>{
    const arr = [];
    arrData && arrData.map((item, index)=>{
        arr.push(
            <div
                style={Object.assign({}, { margin: '10px 0', width: '300px' })}
                key={`demo_${index}`}
            >
                <IntXipt {...item} />
            </div>
        );
    });
    return arr;
};

storiesOf(CategoryName.Module.Input, module)
    .add('int_xipt', () => {
        return (
            <div>
                {renderComponent(selectionData)};

                <IntXipt
                    border={true} />

            </div>
        );
    }

    );

