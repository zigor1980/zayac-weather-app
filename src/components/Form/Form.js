import React from "react";
import "./Form.css"
import SearchInput from "../SearchInput/SearchInput";
import {connect} from "react-redux";
import ForecastForm from "../ForecastForm/ForecastForm";
import fetchForecast from "../../actions/fetchForecast";

function stateToProps(state, props) {
    return {
        forecast: state.forecast,
    }
}

const Form = connect(stateToProps)(
    class FormInternal extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                loading: false,
            };
            this.onSearch = this.onSearch.bind(this);
        }

        onSearch(text) {
            this.setState({
                loading: true,
            });

            this.props.dispatch(fetchForecast(text))
                .then(() => {
                    this.setState({
                        loading: false,
                    })
                });
        }

        render() {
            let {forecast} = this.props;
            let {loading} = this.state;
            return (
                <div className="form">
                    <SearchInput onSearch={this.onSearch}/>
                    {loading && (
                        <div>Cgbyyth</div>
                    )}
                    {!loading && (
                        <ForecastForm data={{
                            humidity: '10',
                            temp: '20',
                            pressure: '30',
                            wind: '4',
                        }}/>
                    )}
                </div>
            )
        }
    }
);

export default Form;
