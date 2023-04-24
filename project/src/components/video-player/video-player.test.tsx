import { render, screen} from '@testing-library/react';
import VideoPlayer from './video-player';

describe('Component: VideoPlayer', () => {
  beforeAll(() => {
    window.HTMLMediaElement.prototype.play = jest.fn();
    window.HTMLMediaElement.prototype.pause = jest.fn();
  });

  it('should render correctly', () => {
    const mockPath = 'mock-path';

    render(
      <VideoPlayer
        src={mockPath}
        poster={'htttp//poster'}
      />,
    );

    expect(screen.getByTestId('videoPlayer')).toBeInTheDocument();
  });
});
