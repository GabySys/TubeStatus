import { render, screen } from '@testing-library/react';
import StatusList from './StatusList';
import React from 'react'

test("StatusList renders successfully", () => {
    render(<StatusList lines={mockData} />)
    expect(screen.getByText(/District/i)).toBeInTheDocument();
    expect(screen.getByText(/Good/i)).toBeInTheDocument();
})

test("StatusList when severity is 10 then background is green", () => {
    render(<StatusList lines={mockData} />)
    const element = screen.getByText(/Good/i).parentElement;
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('green');
})

test("StatusList when severity is 5 then background is yellow", () => {
    render(<StatusList lines={mockData} />)
    const element = screen.getByText(/Part Closure/i).parentElement;
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('orange');
})

test("StatusList when severity is 1 then background is red", () => {
    render(<StatusList lines={mockData} />)
    const element = screen.getByText(/Closed/i).parentElement;
    const styles = window.getComputedStyle(element);
    expect(styles.backgroundColor).toBe('red');
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
    }, {
        "id": "test",
        "name": "test",
        "lineStatuses": [{
            "statusSeverity": 1,
            "statusSeverityDescription": "Closed"
        }],
    },
]
