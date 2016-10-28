package com.suite.Utility;

import org.junit.Test;

import com.suite.Base.TestBase;

public class TestUtil extends TestBase {

	/*
	 * Selecting the Minimum amount of house price
	 * 
	 * @param {String} data- this is Minimum amount of house price
	 **/
	public static void SelectMinPrice(String data) {
		String Xpath_Menu = "//select[@id='forsale_price_min']//option[@value='{0}']";
		int minPrice = (int) Double.parseDouble((data));
		Xpath_Menu = Xpath_Menu.replace("{0}", String.valueOf(minPrice));
		clickByXpath(Xpath_Menu);
	}

	/***
	 * Selecting the Maximum amount of price user want to pay
	 * 
	 * @param {String}
	 *            data- this is Maximum amount of house price
	 */
	public static void SelectMaxPrice(String data) {
		String Xpath_Menu = "//select[@id='forsale_price_max']//option[@value='{0}']";
		int maxPrice = (int) Double.parseDouble((data));
		Xpath_Menu = Xpath_Menu.replace("{0}", String.valueOf(maxPrice));
		clickByXpath(Xpath_Menu);
	}

	/**
	 * @param {String}
	 *            data-this is Type of property
	 */
	public static void SelectPropertyType(String data) {
		String Xpath_Menu = "//select[@id='property_type']//option[@value='{0}']";
		Xpath_Menu = Xpath_Menu.replace("{0}", String.valueOf(data));
		clickByXpath(Xpath_Menu);

	}

	/**
	 * @param {string}
	 *            data-this is Minimum bed selected
	 */
	public static void SelectMinBed(String data) {
		String Xpath_Menu = "//select[@id='beds_min']//option[@value='{0}']";
		int maxPrice = (int) Double.parseDouble((data));
		Xpath_Menu = Xpath_Menu.replace("{0}", String.valueOf(maxPrice));
		clickByXpath(Xpath_Menu);

	}

	public static void SelectMinPCM(String data) {
		String Xpath_Menu = "//select[@id='rent_price_min_per_month']//option[@value='{0}']";
		int minPrice = (int) Double.parseDouble((data));
		Xpath_Menu = Xpath_Menu.replace("{0}", String.valueOf(minPrice));
		// System.out.println(Xpath_Menu);
		clickByXpath(Xpath_Menu);

	}

	public static void SelectMaxPCM(String data) {
		String Xpath_Menu = "//select[@id='rent_price_max_per_month']//option[@value='{0}']";
		int maxPrice = (int) Double.parseDouble((data));
		Xpath_Menu = Xpath_Menu.replace("{0}", String.valueOf(maxPrice));
		// System.out.println(Xpath_Menu);
		clickByXpath(Xpath_Menu);

	}

}
