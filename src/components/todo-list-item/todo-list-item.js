import React from 'react';

import './todo-list-item.css';


const TodoListItem = ({ label, delFunc, importantFunc, doneFunc, important, done }) => {
    let classNames = 'todo-list-item';

    if (important) {
        classNames += ' important'
    }

    if (done) {
        classNames += ' done'
    }

    return (
        <span className={classNames}>
          <span
              className="todo-list-item-label"
              onClick={ doneFunc } >
            {label}
          </span>
          <button type="button"
                  className="btn btn-outline-success btn-sm float-right"
                  onClick={ importantFunc } >
            <i className="fa fa-exclamation"/>
          </button>
          <button type="button"
                  className="btn btn-outline-danger btn-sm float-right"
                  onClick={ delFunc } >
            <i className="fa fa-trash-o"/>
          </button>
        </span>
        )
}

export default TodoListItem;

// export default class TodoListItem extends Component {
//
//     state = {
//         done: false,
//         important: false
//     };
//
//     onLabelClick = () => {
//         this.setState( ({done}) => {
//             return {
//                 done: !done
//             }
//         });
//     };
//
//     onMarkImportant = () => {
//         this.setState( ({important}) => {
//             return {
//                 important: !important
//             }
//         });
//     };
//
//     render() {
//         let { label, delFunc } = this.props;
//         let { done, important  } = this.state;
//         let classNames = 'todo-list-item';
//
//         if (done) {
//             classNames += ' done'
//         }
//
//         if (important) {
//             classNames += ' important'
//         }
//
//         return (
//             <span className={classNames}>
//               <span
//                   className="todo-list-item-label"
//                   onClick={ this.onLabelClick } >
//                 {label}
//               </span>
//               <button type="button"
//                       className="btn btn-outline-success btn-sm float-right"
//                       onClick={ this.onMarkImportant } >
//                 <i className="fa fa-exclamation"/>
//               </button>
//               <button type="button"
//                       className="btn btn-outline-danger btn-sm float-right"
//                       onClick={ delFunc } >
//                 <i className="fa fa-trash-o"/>
//               </button>
//             </span>
//         )
//     }
// }
