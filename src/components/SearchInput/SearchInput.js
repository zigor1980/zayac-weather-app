import React from "react";
import Input from "../Input/Input";
import {ButtonSearch} from "../ButtonSearch/ButtonSearch";
import classNameHash from '../../heplers/classsNameHash';
import './SearchInput.css';

const SearchInput = class SearchInputInternal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            input: null,
        };
        this.onChange = this.onChange.bind(this);
        this.onRef = this.onRef.bind(this);
        this.onSearch = this.onSearch.bind(this);
    }

    onRef(element) {
        this.setState({
            input: element,
        })
    }

    onChange() {
        this.setState({
            text: this.state.input.value,
        })
    }

    onSearch() {
        if (!this.state.text) {
            return false;
        } else {
            this.props.onSearch(this.state.text);
        }
    }

    render() {
        return (
            <div className="search">
                <Input
                    className={classNameHash('input_search', {})}
                    onRef={this.onRef}
                    onChange={this.onChange}
                    placeholder="Enter city name"
                />
                <ButtonSearch
                    onClick={this.onSearch}
                    className={classNameHash('button_search', {
                        active: Boolean(this.state.text),
                    })}
                />
            </div>
        )
    }
};

export default SearchInput;
