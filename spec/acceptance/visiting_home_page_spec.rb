require 'rails_helper'

RSpec.describe "Visiting home page" do
  describe "user visits home page" do
    it "should return a page with the title" do
      visit '/index'
      expect(page).to have_title('Warmup Home page')
    end
  end
end
