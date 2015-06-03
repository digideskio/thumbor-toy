import React       from 'react/addons';
import config      from './../../../../config';
import FilterMixin from './FilterMixin';

var WatermarkFilter = React.createClass({
    displayName: 'WatermarkFilter',

    mixins: [FilterMixin],

    getSettingsNodes() {
        var options = config.watermarkImages.map((image, i) => {
            return <option key={i} value={image.src}>{image.label}</option>;
        });

        return (
            <div>
                <div className="control-group">
                    <div className="select-box">
                        <select ref="image" onChange={this.onChange}>
                            {options}
                        </select>
                        <i className="fa fa-angle-down" />
                    </div>
                </div>
                <div className="control-group">
                    <label className="control-group__label">left</label>
                    <input className="control-group__control"
                           ref="x" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.x} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">top</label>
                    <input className="control-group__control"
                           ref="y" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.x} />
                </div>
                <div className="control-group">
                    <label className="control-group__label">transparency</label>
                    <input className="control-group__control"
                           ref="transparency" type="text"
                           onChange={this.onChange}
                           defaultValue={this.props.filter.transparency} />
                </div>
            </div>
        );
    },

    getSettings() {
        return {
            image:        this.refs.image.getDOMNode().value,
            x:            this.refs.x.getDOMNode().value,
            y:            this.refs.y.getDOMNode().value,
            transparency: this.refs.transparency.getDOMNode().value
        };
    }
});

export default WatermarkFilter;
