import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function Sidebar() {



    const handleClickSidebar = () => {
        if (document.getElementsByTagName("body")[0].classList.contains("sidebar-toggled")) {
            document.getElementById("accordionSidebar")?.classList.remove("toggled");
            document.getElementsByTagName("body")[0].classList.remove("sidebar-toggled");
            document.getElementById("logo")?.classList.add("pl-md-3");
        } else {
            document.getElementById("accordionSidebar")?.classList.add("toggled");
            document.getElementsByTagName("body")[0].classList.add("sidebar-toggled");
            document.getElementById("logo")?.classList.remove("pl-md-3");
        }
    };



    return (
        <>
            <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div id="logo" className="sidebar-brand-icon ">
                        <img style={{width: '50px'}} src='http://localhost:3000/favicon.ico'></img>
                    </div>
                    <div className="sidebar-brand-text mx-2">Goose Form</div>
                </Link>

                <hr className="sidebar-divider my-0" />






                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseComponenti"
                        aria-expanded="true" aria-controls="collapseComponenti">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>Componenti</span>
                    </a>
                    <div id="collapseComponenti" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/componenti/goose-text-area">GooseTextArea</Link>
                            <Link className="collapse-item" to="/componenti/goose-select-static">GooseSelect (Statica)</Link>
                            <Link className="collapse-item" to="/componenti/goose-select-dynamic">GooseSelect (Dinamica)</Link>
                            <Link className="collapse-item" to="/componenti/goose-select-dynamic-due">GooseSelect (Dinamica 2)</Link>
                            <Link className="collapse-item" to="/componenti/goose-linked-select">GooseLinkedSelect</Link>
                            <Link className="collapse-item" to="/componenti/goose-data-list-static">GooseDataList (Statica)</Link>
                            <Link className="collapse-item" to="/componenti/goose-data-list-dynamic">GooseDataList (Dinamica)</Link>
                            <Link className="collapse-item" to="/componenti/goose-text-field">GooseTextField</Link>
                            <Link className="collapse-item" to="/componenti/goose-password-field">GoosePasswordField</Link>
                            <Link className="collapse-item" to="/componenti/goose-number-field">GooseNumberField</Link>
                            <Link className="collapse-item" to="/componenti/goose-radio-static">GooseRadio (Statici)</Link>
                            <Link className="collapse-item" to="/componenti/goose-radio-dynamic">GooseRadio (Dinamici)</Link>
                            <Link className="collapse-item" to="/componenti/goose-checkbox">GooseCheckbox</Link>
                            <Link className="collapse-item" to="/componenti/goose-email-field">GooseEmailField</Link>
                            <Link className="collapse-item" to="/componenti/goose-date-field">GooseDateField</Link>
                            <Link className="collapse-item" to="/componenti/goose-date-time-field">GooseDateTimeField</Link>
                            <Link className="collapse-item" to="/componenti/goose-month-field">GooseMonthField</Link>
                            <Link className="collapse-item" to="/componenti/goose-week-field">GooseWeekField</Link>
                            <Link className="collapse-item" to="/componenti/goose-time-field">GooseTimeField</Link>
                            <Link className="collapse-item" to="/componenti/goose-url-field">GooseUrlField</Link>
                            <Link className="collapse-item" to="/componenti/goose-tel-field">GooseTelField</Link>
                            <Link className="collapse-item" to="/componenti/goose-color-field">GooseColorField</Link>
                            <Link className="collapse-item" to="/componenti/goose-range-field">GooseRangeField</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseTextArea"
                        aria-expanded="true" aria-controls="collapseGooseTextArea">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseTextArea</span>
                    </a>
                    <div id="collapseGooseTextArea" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-text-area/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/max-text">Max Text</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-text-area/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-text-area/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-text-area/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-text-area/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-text-area/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-text-area/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-text-area/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-area/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-area/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-area/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-area/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-text-area/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-text-area/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-text-area/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseSelect"
                        aria-expanded="true" aria-controls="collapseGooseSelect">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseSelect</span>
                    </a>
                    <div id="collapseGooseSelect" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-select/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-select/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-select/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-select/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-select/standard/not-in">Not In</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-select/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-select/complex/not-equal">Not Equal</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-select/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-select/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-select/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-select/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-select/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-select/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-select/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-select/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseLinkedSelect"
                        aria-expanded="true" aria-controls="collapseGooseLinkedSelect">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseLinkedSelect</span>
                    </a>
                    <div id="collapseGooseLinkedSelect" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-linked-select/standard/required">Required</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseDataList"
                        aria-expanded="true" aria-controls="collapseGooseDataList">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseDataList</span>
                    </a>
                    <div id="collapseGooseDataList" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-data-list/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-data-list/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-data-list/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-data-list/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/goose-data-list/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-data-list/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-data-list/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/goose-data-list/standard/max-text">Max Text</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-data-list/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-data-list/complex/not-equal">Not Equal</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-data-list/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-data-list/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-data-list/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-data-list/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-data-list/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-data-list/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-data-list/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-data-list/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseTextField"
                        aria-expanded="true" aria-controls="collapseGooseTextField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseTextField</span>
                    </a>
                    <div id="collapseGooseTextField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-text-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/max-text">Max Text</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-text-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-text-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-text-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-text-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-text-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-text-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-text-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-text-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-text-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-text-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-text-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGoosePasswordField"
                        aria-expanded="true" aria-controls="collapseGoosePasswordField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GoosePasswordField</span>
                    </a>
                    <div id="collapseGoosePasswordField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-password-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-password-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-password-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-password-field/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/goose-password-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-password-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-password-field/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/goose-password-field/standard/max-text">Max Text</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-password-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-password-field/complex/not-equal">Not Equal</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-password-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-password-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-password-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-password-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-password-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-password-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-password-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-password-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseNumberField"
                        aria-expanded="true" aria-controls="collapseGooseNumberField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseNumberField</span>
                    </a>
                    <div id="collapseGooseNumberField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-number-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-number-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-number-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-number-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-number-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-number-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-number-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-number-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-number-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-number-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-number-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-number-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-number-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-number-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-number-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-number-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-number-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-number-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-number-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-number-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseRadio"
                        aria-expanded="true" aria-controls="collapseGooseRadio">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseRadio</span>
                    </a>
                    <div id="collapseGooseRadio" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-radio/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-radio/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-radio/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-radio/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-radio/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-radio/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-radio/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-radio/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-radio/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-radio/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-radio/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-radio/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-radio/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-radio/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-radio/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-radio/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-radio/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-radio/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-radio/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-radio/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-radio/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-radio/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-radio/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-radio/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-radio/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-radio/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-radio/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseCheckbox"
                        aria-expanded="true" aria-controls="collapseGooseCheckbox">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseCheckbox</span>
                    </a>
                    <div id="collapseGooseCheckbox" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-checkbox/standard/required">Required</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-checkbox/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-checkbox/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-checkbox/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-checkbox/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-checkbox/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-checkbox/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-checkbox/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-checkbox/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseEmailField"
                        aria-expanded="true" aria-controls="collapseGooseEmailField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseEmailField</span>
                    </a>
                    <div id="collapseGooseEmailField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-email-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-email-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-email-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-email-field/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/goose-email-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-email-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-email-field/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/goose-email-field/standard/max-text">Max Text</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-email-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-email-field/complex/not-equal">Not Equal</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-email-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-email-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-email-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-email-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-email-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-email-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-email-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-email-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseDateField"
                        aria-expanded="true" aria-controls="collapseGooseDateField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseDateField</span>
                    </a>
                    <div id="collapseGooseDateField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-date-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-date-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-date-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-date-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-date-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-date-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-date-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-date-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-date-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-date-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-date-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-date-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-date-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-date-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-date-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-date-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseDateTimeField"
                        aria-expanded="true" aria-controls="collapseGooseDateTimeField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseDateTimeField</span>
                    </a>
                    <div id="collapseGooseDateTimeField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-date-time-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-date-time-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-date-time-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseMonthField"
                        aria-expanded="true" aria-controls="collapseGooseMonthField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseMonthField</span>
                    </a>
                    <div id="collapseGooseMonthField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-month-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-month-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-month-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-month-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-month-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-month-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-month-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-month-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-month-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-month-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-month-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-month-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-month-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-month-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-month-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-month-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-month-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-month-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-month-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-month-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseWeekField"
                        aria-expanded="true" aria-controls="collapseGooseWeekField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseWeekField</span>
                    </a>
                    <div id="collapseGooseWeekField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-week-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-week-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-week-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-week-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-week-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-week-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-week-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-week-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-week-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-week-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-week-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-week-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-week-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-week-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-week-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-week-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-week-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-week-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-week-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-week-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseTimeField"
                        aria-expanded="true" aria-controls="collapseGooseTimeField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseTimeField</span>
                    </a>
                    <div id="collapseGooseTimeField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-time-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-time-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-time-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-time-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-time-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-time-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-time-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-time-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-time-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-time-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-time-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-time-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-time-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-time-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-time-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-time-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-time-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-time-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-time-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-time-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseUrlField"
                        aria-expanded="true" aria-controls="collapseGooseUrlField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseUrlField</span>
                    </a>
                    <div id="collapseGooseUrlField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-url-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-url-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-url-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-url-field/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/goose-url-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-url-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-url-field/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/goose-url-field/standard/max-text">Max Text</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-url-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-url-field/complex/not-equal">Not Equal</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-url-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-url-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-url-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-url-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-url-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-url-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-url-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-url-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseTelField"
                        aria-expanded="true" aria-controls="collapseGooseTelField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseTelField</span>
                    </a>
                    <div id="collapseGooseTelField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-tel-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-tel-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-tel-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-tel-field/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/goose-tel-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-tel-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-tel-field/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/goose-tel-field/standard/max-text">Max Text</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-tel-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-tel-field/complex/not-equal">Not Equal</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-tel-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-tel-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-tel-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-tel-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-tel-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-tel-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-tel-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-tel-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseColorField"
                        aria-expanded="true" aria-controls="collapseGooseColorField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseColorField</span>
                    </a>
                    <div id="collapseGooseColorField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-color-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-color-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-color-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-color-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-color-field/standard/not-in">Not In</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-color-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-color-field/complex/not-equal">Not Equal</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-color-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-color-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-color-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-color-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-color-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-color-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-color-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-color-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseGooseRangeField"
                        aria-expanded="true" aria-controls="collapseGooseRangeField">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>GooseRangeField</span>
                    </a>
                    <div id="collapseGooseRangeField" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/goose-range-field/standard/required">Required</Link>
                            <Link className="collapse-item" to="/goose-range-field/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-range-field/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-range-field/standard/in">In</Link>
                            <Link className="collapse-item" to="/goose-range-field/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/goose-range-field/standard/min">Min</Link>
                            <Link className="collapse-item" to="/goose-range-field/standard/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-range-field/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/goose-range-field/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/goose-range-field/complex/min">Min</Link>
                            <Link className="collapse-item" to="/goose-range-field/complex/max">Max</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/HIDE_B_IF_A_EQUAL_X">HIDE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/DISABLE_B_IF_A_EQUAL_X">DISABLE_B_IF_A_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/HIDE_B_IF_A_NOT_EQUAL_X">HIDE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/DISABLE_B_IF_A_NOT_EQUAL_X">DISABLE_B_IF_A_NOT_EQUAL_X</Link>
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/HIDE_B_IF_A_MIN_X">HIDE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/DISABLE_B_IF_A_MIN_X">DISABLE_B_IF_A_MIN_X</Link>
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/HIDE_B_IF_A_MAX_X">HIDE_B_IF_A_MAX_X</Link>
                            <Link className="collapse-item" to="/goose-range-field/simpleRender/DISABLE_B_IF_A_MAX_X">DISABLE_B_IF_A_MAX_X</Link>
                            <hr />
                            <Link className="collapse-item" to="/goose-range-field/complexRender/HIDE_C_IF_A_EQUAL_B">HIDE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-range-field/complexRender/DISABLE_C_IF_A_EQUAL_B">DISABLE_C_IF_A_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-range-field/complexRender/HIDE_C_IF_A_NOT_EQUAL_B">HIDE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-range-field/complexRender/DISABLE_C_IF_A_NOT_EQUAL_B">DISABLE_C_IF_A_NOT_EQUAL_B</Link>
                            <Link className="collapse-item" to="/goose-range-field/complexRender/HIDE_C_IF_A_MIN_B">HIDE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-range-field/complexRender/DISABLE_C_IF_A_MIN_B">DISABLE_C_IF_A_MIN_B</Link>
                            <Link className="collapse-item" to="/goose-range-field/complexRender/HIDE_C_IF_A_MAX_B">HIDE_C_IF_A_MAX_B</Link>
                            <Link className="collapse-item" to="/goose-range-field/complexRender/DISABLE_C_IF_A_MAX_B">DISABLE_C_IF_A_MAX_B</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseEsempi"
                        aria-expanded="true" aria-controls="collapseEsempi">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>Esempi di Form</span>
                    </a>
                    <div id="collapseEsempi" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/esempi/esempioUno">Esempio Form Uno</Link>
                        </div>
                    </div>
                </li>

                <hr className="sidebar-divider d-none d-md-block" />

                <div className="text-center d-none d-md-inline">
                    <button onClick={handleClickSidebar} className="rounded-circle border-0" id="sidebarToggle"></button>
                </div>



            </ul>
        </>
    );

}