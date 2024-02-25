import * as React from 'react';
import { TextInput } from '../shared';

export const TodoTypeFormModal = () => {
  const [newType, setNewType] = React.useState('');

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-black bg-opacity-70 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-stone-500 px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:mt-0 sm:text-left flex flex-col gap-2">
                <h3
                  className="text-base font-semibold leading-6 text-white"
                  id="modal-title"
                >
                  Add a new type
                </h3>
                <div className="mt-2">
                  <TextInput
                    value={newType}
                    size="medium"
                    onChange={(event) => setNewType(event.target.value)}
                    placeholder="New type..."
                    className="w-full"
                  />
                </div>
              </div>
            </div>
            <div className="bg-stone-500 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="inline-flex w-full justify-center rounded-md text-white bg-gradient-to-r from-stone-600 to-slate-900 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-stone-300 dark:focus:ring-slate-800 px-7 py-2 text-sm font-semibold shadow-sm sm:ml-3 sm:w-auto"
              >
                Add
              </button>
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-5 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
