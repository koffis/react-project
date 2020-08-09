import React from 'react';
import {create} from 'react-test-renderer';
import ProfileStatus from "../Components/Profile/ProfileInfo/ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
        const component = create(<ProfileStatus status={"yaroslav kr"}/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("yaroslav kr");
    });

    test("After creation span should be displayed", () => {
        const component = create(<ProfileStatus status={"yaroslav kr"}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });

    test("After creation input shouldn`t be displayed", () => {
        const component = create(<ProfileStatus status={"yaroslav kr"}/>);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input")
        }).toThrow();
    });

    test("After creation span should contains correct status", () => {
        const component = create(<ProfileStatus status={"yaroslav kr"}/>);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("yaroslav kr");
    });

    test("Input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus status={"yaroslav kr"}/>);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("yaroslav kr");
    });

    test("Callback should be called", () => {
        const mockCallback = jest.fn();
        const component = create(<ProfileStatus status={"yaroslav kr"} updateStatus={mockCallback}/>);
        const instance = component.getInstance();
        instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});