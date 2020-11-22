import { render, screen, fireEvent } from "@testing-library/react";
import UserProfileName from "../components/user-profile-name";
import '@testing-library/jest-dom';

test('should render component', () => {
    const user = {isVip: true, name: 'test user'}
    render(<UserProfileName user={user}></UserProfileName>);
    
    const nameEl = screen.getByText('test user');
    const iconEl = screen.getByTestId('profile-icon');
    expect(iconEl).toHaveTextContent('🚀');
    screen.debug(iconEl);
    fireEvent.click(iconEl);
    screen.debug();
    expect(nameEl).toBeInTheDocument('🛸');
    screen.debug();
    screen.debug(nameEl);
});