import { render, screen } from '@testing-library/react';
import StatusList from './StatusList';
import React from 'react'

test("StatusList renders successfully", () => {
    render(<StatusList lines={mockData} />)
    expect(screen.getByText(/District/i)).toBeInTheDocument();
})

const mockData = [
    {
        "id": "backerloo",
        "name": "Backerloo",
        "lineStatuses": [{
            "statusSeverity": 10,
            "statusSeverityDescription": "Good Service"
        }],
    }, {
        "id": "district",
        "name": "District",
        "lineStatuses": [{
            "statusSeverity": 5,
            "statusSeverityDescription": "Part Closure"
        }],
    },
]
