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
                    <div id="logo" className="sidebar-brand-icon pl-md-3">
                        <i className="fas fa-feather-alt"></i>
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
                            <Link className="collapse-item" to="/componenti/goose-mounth-field">GooseMounthField</Link>
                            <Link className="collapse-item" to="/componenti/goose-week-field">GooseWeekField</Link>
                            <Link className="collapse-item" to="/componenti/goose-time-field">GooseTimeField</Link>
                            <Link className="collapse-item" to="/componenti/goose-color-field">GooseColorField</Link>
                            <Link className="collapse-item" to="/componenti/goose-range-field">GooseRangeField</Link>
                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseControlliStandard"
                        aria-expanded="true" aria-controls="collapseControlliStandard">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>Controlli standard</span>
                    </a>
                    <div id="collapseControlliStandard" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/controlli/standard/required">Required</Link>
                            <Link className="collapse-item" to="/controlli/standard/equal">Equal</Link>
                            <Link className="collapse-item" to="/controlli/standard/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/controlli/standard/pattern">Pattern</Link>
                            <Link className="collapse-item" to="/controlli/standard/in">In</Link>
                            <Link className="collapse-item" to="/controlli/standard/not-in">Not In</Link>
                            <Link className="collapse-item" to="/controlli/standard/min-text">Min Text</Link>
                            <Link className="collapse-item" to="/controlli/standard/max-text">Max Text</Link>
                            <Link className="collapse-item" to="/controlli/standard/min">Min</Link>
                            <Link className="collapse-item" to="/controlli/standard/max">Max</Link>



                        </div>
                    </div>
                </li>

                <li className="nav-item">
                    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseControlliComplex"
                        aria-expanded="true" aria-controls="collapseControlliComplex">
                        <i className="fas fa-fw fa-swatchbook"></i>
                        <span>Controlli complessi</span>
                    </a>
                    <div id="collapseControlliComplex" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                        <div className="bg-white py-2 collapse-inner rounded">
                            <h6 className="collapse-header">Opzioni disponibili:</h6>
                            <Link className="collapse-item" to="/controlli/complex/equal">Equal</Link>
                            <Link className="collapse-item" to="/controlli/complex/not-equal">Not Equal</Link>
                            <Link className="collapse-item" to="/controlli/complex/min">Min</Link>
                            <Link className="collapse-item" to="/controlli/complex/max">Max</Link>
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