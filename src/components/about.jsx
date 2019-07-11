import React, { Component } from 'react';
class About extends Component {
    // state = { 
    //     count : this.props.about.value
    //     //tags: ['tag1', 'tag2']
    // }

    // handleIncrement = product => {
    //     this.setState({ count: this.state.count + 1 });
    // }

    // renderTags() {
    //     if (this.state.tags.length === 0) return <p>There are no tags</p>;
    //     //List elements
    //     //return <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    render() { 
        let classes = this.getBadgeClasses();
        const { onIncrement, onDelete, about } =this.props;
        return (
            <div>
                {/* {this.props.children} */}
                <span className={classes}>{ this.formatCount() }</span>
                <button 
                    onClick={() => onIncrement(about)} 
                    className="btn btn-secondary btn-sm"
                >
                    Increment
                </button>
                {/* {this.renderTags()} */}
                <button 
                    onClick={() => onDelete(about.id)} 
                    className="btn btn-danger btn-sm m-2"
                >
                    Delete
                </button>
            </div>
        )
    }

    getBadgeClasses() {
        const { about } = this.props;
        let classes = "badge m-2 badge-";
        classes += about.value === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount(){
        const { about } = this.props;
        const { count } = about;
        return count ===0 ? "Zero" : about.value;
    }
}
 
export default About;