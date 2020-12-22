/* eslint-disable no-console */
import Select, { Option } from 'rc-select';
import React, { useEffect, useState } from 'react';

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
        setState({ value });
    };

    const onSelect = (...args) => {
        console.log(args);
    };

    const loadData = () => {
        const children = [];
        for (let i = 10; i < 36; i += 1) {
            children.push(
                <Option key={i.toString(36) + i} disabled={i === 10} title={`中文${i}`}>
                    中文{i}
                </Option>,
            );
        }
        setState({ loading: false, children });
    };

    const { loading, children, value } = estado;

    return (
        <div>
            <h2>loading load data</h2>

            <div style={{ width: 300 }}>
                <Select
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
                </Select>
            </div>
        </div>
    );

}

export default LoadingSelect;
/* eslint-enable */