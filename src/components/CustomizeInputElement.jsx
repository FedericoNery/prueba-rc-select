/* eslint-disable no-console */
import Select, { Option } from 'rc-select';
import React, { useState } from 'react';

const CustomizeInputElement = (props) => {
    const [estado, setEstado] = useState({
        disabled: false,
        value: '',
        options: [],
    })

    const textareaRef = React.createRef();
    const timeoutId = 1000


    const onChange = (value, option) => {
        console.log('onChange', value, option);
        setEstado({
            value,
        });
    };

    const onKeyDown = e => {
        const { value } = estado;
        if (e.keyCode === 13) {
            console.log('onEnter', value);
        }
    };

    const onSelect = (v, option) => {
        console.log('onSelect', v, option);
    };

    const onSearch = (text) => {
        console.log('onSearch:', text);
    };

    const onAsyncChange = value => {
        window.clearTimeout(timeoutId);

        setEstado({options: []});

        //timeoutId = 
        window.setTimeout(() => {
            setEstado({
                options: [{ value }, { value: `${value}-${value}` }],
            });
        }, 1000);
    };

    const toggleDisabled = () => {
        const { disabled } = estado;
        setEstado({
            disabled: !disabled,
        });
    };

    const { value, disabled } = estado;
    return (
        <div>
            <h2>combobox</h2>
            <p>
                <button type="button" onClick={toggleDisabled}> toggle disabled </button>
                <button type="button" onClick={() => setEstado({ value: '' })}> reset </button>
            </p>
            <div>
                <Select
                    disabled={disabled}
                    style={{ width: 500 }}
                    onChange={onChange}
                    onSelect={onSelect}
                    onSearch={onSearch}
                    onInputKeyDown={onKeyDown}
                    notFoundContent=""
                    allowClear
                    placeholder="please input, max len: 10"
                    value={value}
                    maxLength={10}
                    mode="combobox"
                    backfill
                    onFocus={() => console.log('focus')}
                    onBlur={() => console.log('blur')}
                >
                    <Option value="jack">
                        <b style={{ color: 'red' }}>jack</b>
                    </Option>
                    <Option value="lucy">lucy</Option>
                    <Option value="disabled" disabled>
                        disabled
        </Option>
                    <Option value="yiminghe">yiminghe</Option>
                    <Option value="竹林星光">竹林星光</Option>
                </Select>

                <h3>Customize Input Element</h3>
                <Select
                    mode="combobox"
                    style={{ width: 200 }}
                    getInputElement={() => (
                        <textarea style={{ background: 'red' }} rows={3} ref={textareaRef} />
                    )}
                    options={[{ value: 'light' }, { value: 'bamboo' }]}
                    allowClear
                    placeholder="2333"
                />

                <h3>Async Input Element</h3>
                <Select
                    mode="combobox"
                    notFoundContent={null}
                    style={{ width: 200 }}
                    options={estado.options}
                    onChange={onAsyncChange}
                />
            </div>
        </div>
    );
}

/*  componentDidMount() {
     console.log('Ref:', this.textareaRef);
 } */

export default CustomizeInputElement;