/* eslint-disable no-console */
import React, { useState } from 'react';
import OptionInterface from './OptionInterface';
import SelectInterface from './SelectInterface';

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
        setEstado({ options: [] });
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
                <SelectInterface
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
                    onBlur={() => console.log('blur')}>
                    <OptionInterface value="jack">
                        <b style={{ color: 'red' }}>jack</b>
                    </OptionInterface>
                    <OptionInterface value="lucy">lucy</OptionInterface>
                    <OptionInterface value="disabled" disabled>disabled</OptionInterface>
                    <OptionInterface value="yiminghe">yiminghe</OptionInterface>
                    <OptionInterface value="竹林星光">竹林星光</OptionInterface>
                </SelectInterface>

                <h3>Customize Input Element</h3>
                <SelectInterface
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
                <SelectInterface
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