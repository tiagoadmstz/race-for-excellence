import './index.css';

import React from 'react';

export default function Settings() {
    return (
        <>
            <form className="form-settings">
                <label>OEE</label>
                <input type="text" />
                <label>SCRAP</label>
                <input type="text" />
            </form>
        </>
    );
};