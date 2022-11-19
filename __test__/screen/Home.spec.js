import { render, screen, fireEvent } from '@testing-library/react-native';
import Home from '../../screen/Home';

describe('Home', () => {
  it('should render correctly', () => {
    render(<Home />);
    expect(screen.getByText('Bringing Muslims Together')).toBeTruthy();
  });

  it('should open message box', () => {
    render(<Home />);
    fireEvent.press(screen.getByText('Contact us'));
    expect(screen.getByText('Reach out to us through')).toBeTruthy();
  });

  it('should close message box', () => {
    render(<Home />);
    fireEvent.press(screen.getByText('Overlay'));

    expect(screen.queryByText('Reach out to us through')).toBeNull();
  });

  it('should show the message when notify button clicked', () => {
    render(<Home />);

    fireEvent.press(screen.getByText('Notify Me'));
    expect(
      screen.getByText('Your email address has been received.'),
    ).toBeTruthy();
  });
});
