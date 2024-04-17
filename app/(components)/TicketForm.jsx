'use client';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

const TicketForm = ({ ticket }) => {
  const router = useRouter();
  const EDITMODE = ticket._id === 'new' ? false : true;

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (EDITMODE) {
      const res = await fetch(`/api/Tickets/${ticket._id}`, {
        method: 'PUT',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });
      if (!res.ok) {
        throw new Error('Failed to update ticket');
      }
    } else {
      const res = await fetch('/api/Tickets', {
        method: 'POST',
        body: JSON.stringify({ formData }),
        'content-type': 'application/json',
      });
      if (!res.ok) {
        throw new Error('Failed to create new ticket');
      }
    }

    router.refresh();
    router.push('/');
  };
  const startingTicketData = {
    firstname: '',
    lastname: '',
    state: '',
    zip: '',
    address: '',
    phone: '',
    email: '',
    product_pavers: '',
    product_syntheticturf: '',
    product_decking: '',
    product_pergolas: '',
    product_lighting: '',
    product_outdoorkitchens: '',
    product_bbqislands: '',
    product_firepits: '',
    product_outdoorfireplaces: '',
    product_wallspillars: '',
    product_waterfeatures: '',
    source: '',
    comments: '',
    priority: '',
  };

  if (EDITMODE) {
    startingTicketData['firstname'] = ticket.firstname;
    startingTicketData['lastname'] = ticket.lastname;
    startingTicketData['state'] = ticket.state;
    startingTicketData['zip'] = ticket.zip;
    startingTicketData['address'] = ticket.address;
    startingTicketData['phone'] = ticket.phone;
    startingTicketData['email'] = ticket.email;
    startingTicketData['product_pavers'] = ticket.product_pavers;
    startingTicketData['product_syntheticturf'] = ticket.product_syntheticturf;
    startingTicketData['product_decking'] = ticket.product_decking;
    startingTicketData['product_pergolas'] = ticket.product_pergolas;
    startingTicketData['product_lighting'] = ticket.product_lighting;
    startingTicketData['product_outdoorkitchens'] =
      ticket.product_outdoorkitchens;
    startingTicketData['product_bbqislands'] = ticket.product_bbqislands;
    startingTicketData['product_firepits'] = ticket.product_firepits;
    startingTicketData['product_outdoorfireplaces'] =
      ticket.product_outdoorfireplaces;
    startingTicketData['product_wallspillars'] = ticket.product_wallspillars;
    startingTicketData['product_waterfeatures'] = ticket.product_waterfeatures;
    startingTicketData['source'] = ticket.source;
    startingTicketData['comments'] = ticket.comments;
    startingTicketData['priority'] = ticket.priority;
  }

  const [formData, setFormData] = useState(startingTicketData);
  return (
    <div className="flex justify-center">
      <form
        className="flex flex-col gap-3"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>{EDITMODE ? 'Update Customer' : 'Add Customer'}</h3>

        <div className="text-right">
          <label>First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={handleChange}
            required={true}
            value={formData.firstname}
            placeholder="Enter first name"
          />
        </div>
        <div className="text-right">
          <label>Last Name</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={handleChange}
            required={true}
            value={formData.lastname}
            placeholder="Enter last name"
          />
        </div>
        <div className="text-right">
          <label>State</label>
          <select name="state" value={formData.state} onChange={handleChange}>
            <option value="">Select State</option>
            <option value="AZ">AZ</option>
            <option value="CA">CA</option>
            <option value="CO">CO</option>
            <option value="NV">NV</option>
            <option value="OR">OR</option>
            <option value="TX">TX</option>
            <option value="WA">WA</option>
          </select>
        </div>
        <div className="text-right">
          <label>Zip Code</label>
          <input
            type="text"
            id="zip"
            name="zip"
            onChange={handleChange}
            required={true}
            value={formData.zip}
            placeholder="Enter zip code"
          />
        </div>
        <div className="text-right">
          <label>Address</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            required={true}
            value={formData.address}
            placeholder="Enter address"
          />
        </div>
        <div className="text-right">
          <label>Phone</label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={handleChange}
            required={true}
            value={formData.phone}
            placeholder="Enter phone number"
          />
        </div>
        <div className="text-right">
          <label>Email</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            required={true}
            value={formData.email}
            placeholder="Enter email"
          />
        </div>

        <div className="text-right">
          <label>What products are they interested in?</label>
          <br />
          <label>
            <input
              id="product_pavers"
              name="product_pavers"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_pavers == 'on' ? 'checked' : ''}
            />
            Pavers
          </label>
          <br />
          <label>
            <input
              id="product_syntheticturf"
              name="product_syntheticturf"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_syntheticturf == 'on' ? 'checked' : ''}
            />
            Synthetic Turf
          </label>
          <br />

          <label>
            <input
              id="product_decking"
              name="product_decking"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_decking == 'on' ? 'checked' : ''}
            />
            Decking
          </label>
          <br />

          <label>
            <input
              id="product_pergolas"
              name="product_pergolas"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_pergolas == 'on' ? 'checked' : ''}
            />
            Pergolas
          </label>
          <br />

          <label>
            <input
              id="product_lighting"
              name="product_lighting"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_lighting == 'on' ? 'checked' : ''}
            />
            Lighting
          </label>
          <br />

          <label>
            <input
              id="product_outdoorkitchens"
              name="product_outdoorkitchens"
              type="checkbox"
              onChange={handleChange}
              checked={
                formData.product_outdoorkitchens == 'on' ? 'checked' : ''
              }
            />
            Outdoor Kitchens
          </label>
          <br />

          <label>
            <input
              id="product_bbqislands"
              name="product_bbqislands"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_bbqislands == 'on' ? 'checked' : ''}
            />
            BBQ Islands
          </label>
          <br />

          <label>
            <input
              id="product_firepits"
              name="product_firepits"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_firepits == 'on' ? 'checked' : ''}
            />
            Fire Pits
          </label>
          <br />

          <label>
            <input
              id="product_outdoorfireplaces"
              name="product_outdoorfireplaces"
              type="checkbox"
              onChange={handleChange}
              checked={
                formData.product_outdoorfireplaces == 'on' ? 'checked' : ''
              }
            />
            Outdoor Fireplaces
          </label>
          <br />

          <label>
            <input
              id="product_wallspillars"
              name="product_wallspillars"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_wallspillars == 'on' ? 'checked' : ''}
            />
            Walls & Pillars
          </label>
          <br />

          <label>
            <input
              id="product_waterfeatures"
              name="product_waterfeatures"
              type="checkbox"
              onChange={handleChange}
              checked={formData.product_waterfeatures == 'on' ? 'checked' : ''}
            />
            Water Features
          </label>
        </div>

        <div className="text-right">
          <label>Where did they hear about us?</label>
          <br />
          <select
            id="source"
            name="source"
            onChange={handleChange}
            required={true}
            value={formData.source}
          >
            <option value="">Select</option>
            <option value="Billboard">Billboard</option>
            <option value="Google">Google</option>
            <option value="Mail">Mail</option>
            <option value="Magazine">Magazine</option>
            <option value="Other Website">Other Website</option>
            <option value="Podcast">Podcast</option>
            <option value="Radio">Radio</option>
            <option value="Facebook">Facebook</option>
            <option value="Instagram">Instagram</option>
            <option value="TikTok">TikTok</option>
            <option value="YouTube">YouTube</option>
            <option value="System Pavers Employees">
              System Pavers Employees
            </option>
            <option value="Television">Television</option>
            <option value="Word of Mouth/Referral">
              Word of Mouth/Referral
            </option>
            <option value="Event">Event</option>
            <option value="Flyer on my door">Flyer on the door</option>
          </select>
        </div>
        <div className="text-right">
          <label>Additional Comments</label>
          <br />
          <textarea
            type="text"
            id="comments"
            name="comments"
            onChange={handleChange}
            required={true}
            value={formData.comments}
            rows="5"
            cols="35"
            placeholder="Enter additional comments"
          ></textarea>
        </div>

        <label>Priority</label>
        <div>
          <input
            id="priority-1"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={1}
            checked={formData.priority == 1}
          />
          <label>1</label>
          <input
            id="priority-2"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={2}
            checked={formData.priority == 2}
          />
          <label>2</label>
          <input
            id="priority-3"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={3}
            checked={formData.priority == 3}
          />
          <label>3</label>
          <input
            id="priority-4"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={4}
            checked={formData.priority == 4}
          />
          <label>4</label>
          <input
            id="priority-5"
            name="priority"
            type="radio"
            onChange={handleChange}
            value={5}
            checked={formData.priority == 5}
          />
          <label>5</label>
        </div>

        <div className="text-right">
          <input
            type="submit"
            className="btn max-w-xs"
            value={EDITMODE ? 'Update Customer' : 'Submit Customer'}
          />
        </div>
      </form>
    </div>
  );
};

export default TicketForm;
