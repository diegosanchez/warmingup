require 'rails_helper'

RSpec.describe User, :type => :model do
  describe "user emails should be unique" do
    before(:each) do
      User.create!( name: 'me', email: 'me@test.com' )
    end

    it "should raise error when users having same emails are created" do
      expect{ User.create!( name: 'metoo', email: 'me@test.com' ) }.to \
        raise_error(ActiveRecord::RecordInvalid)
    end
  end
end
