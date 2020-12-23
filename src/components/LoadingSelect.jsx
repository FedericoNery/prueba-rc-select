import React, { useEffect, useState } from 'react';
import OptionInterface from './OptionInterface';
import SelectInterface from './SelectInterface';

const LoadingSelect = (props) => {
    const [estado, setState] = useState({
        loading: true,
        value: ['a10'],
        children: [],
    })

    useEffect(() => {
        loadData()
    },[])

    const onChange = (value, options) => {
        console.log('onChange', value, options);
        setState({ value, children: estado.children, loading: false });
    };

    const onSelect = (...args) => {
        console.log(args);
    };

    const loadData = () => {
        const children = [];
        for (let i = 10; i < 36; i += 1) {
            children.push(
                <OptionInterface key={i.toString(36) + i} disabled={i === 10} title={`中文${i}`}>
                    中文{i}
                </OptionInterface>,
            );
        }
        setState({ loading: false, children });
    };

    const { loading, children, value } = estado;

    return (
        <div>
            <h2>loading load data</h2>

            <div style={{ width: 300 }}>
                <SelectInterface
                    value={value}
                    style={{ width: 500 }}
                    mode="multiple"
                    loading={loading}
                    optionFilterProp="children"
                    optionLabelProp="children"
                    onSelect={onSelect}
                    placeholder="please select"
                    onChange={onChange}
                    onFocus={() => console.log('focus')}
                    onBlur={v => console.log('blur', v)}
                    tokenSeparators={[' ', ',']}
                >
                    {children}
                </SelectInterface>
            </div>
        </div>
    );

}

export default LoadingSelect;
