import React from 'react';
import { jest } from '@jest/globals';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useSearchParams } from 'next/navigation';
import ResultsPage from './page';
import { searchData } from '@/utils/data';

jest.mock('next/navigation', () => ({
  useSearchParams: jest.fn(),
  useRouter: () => ({
    replace: jest.fn(),
  }),
}));

jest.mock('../../utils/data', () => ({
  searchData: jest.fn(),
}));

const mockSearchData = searchData as jest.MockedFunction<typeof searchData>;
const mockUseSearchParams = useSearchParams as jest.Mock;

describe('ResultsPage', () => {
  beforeEach(() => {
    mockSearchData.mockClear();
    mockUseSearchParams.mockImplementation(() => ({
      get: () => 'test',
    }));
  });

  it('renders results after data is fetched', async () => {
    mockSearchData.mockResolvedValueOnce([
      {
        id: 1,
        type: 'animal',
        url: 'https://example.com',
        title: 'Test Animal',
        description: 'This is a test animal.',
        image: 'https://example.com/image.jpg',
      },
    ]);

    render(<ResultsPage />);

    await waitFor(() => {
      expect(screen.getByText('Test Animal')).toBeInTheDocument();
    });
  });
});
