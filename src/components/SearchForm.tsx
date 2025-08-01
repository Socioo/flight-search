import { useForm } from 'react-hook-form';

export default function SearchForm({ onSearch }: { onSearch: (params: any) => void }) {
  const { register, handleSubmit } = useForm();

  return (
    <form
      onSubmit={handleSubmit(onSearch)}
      className="space-y-4"
    >
      <div className="flex flex-col">
        <label htmlFor="from" className="text-sm font-medium text-black mb-1">From</label>
        <input
          {...register('from')}
          id="from"
          placeholder="City or Airport"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="to" className="text-sm font-medium text-black mb-1">To</label>
        <input
          {...register('to')}
          id="to"
          placeholder="City or Airport"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="departDate" className="text-sm font-medium text-black mb-1">Departure</label>
        <input
          {...register('departDate')}
          id="departDate"
          type="date"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="returnDate" className="text-sm font-medium text-black mb-1">Return</label>
        <input
          {...register('returnDate')}
          id="returnDate"
          type="date"
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-2xl w-[200px] px-6 py-4"
        >
          Search
        </button>
      </div>
    </form>
  );
}
