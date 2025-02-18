"use client";

import React, { useMemo, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import {
  LineChartIcon as ChartLineUp,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { RealEstateToken } from "@/hooks/useDashboardData";
import { useToast } from "@/components/ui/use-toast";
import { useGlobalState } from "@/context/GlobalStateContext";

interface CryptoTableProps {
  data: RealEstateToken[];
  onSelect: (token: RealEstateToken) => void;
  onViewStock: (token: RealEstateToken) => void;
  onViewToken: (token: RealEstateToken) => void;
}

type Country = "India" | "UK" | "US" | "Dubai";

export function CryptoTable({
  data,
  onSelect,
  onViewStock,
  onViewToken,
}: CryptoTableProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country>("India");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { selectedNetwork } = useGlobalState();

  const handleCountryChange = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleExpressInterest = async (country: Country) => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/express-interest/country", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ country }),
      });

      if (!response.ok) {
        throw new Error("Failed to express interest");
      }

      const data = await response.json();
      toast({
        title: "Interest Recorded",
        description: data.message,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to record interest. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filteredData = useMemo(() => {
    switch (selectedCountry) {
      case "India":
        return data.filter((token) => token.country === "IN");
      case "UK":
        return data.filter((token) => token.country === "UK");
      case "US":
        return data.filter((token) => token.country === "US");
      case "Dubai":
        return data.filter((token) => token.country === "Dubai");
      default:
        return [];
    }
  }, [data, selectedCountry]);

  return (
    <div className="space-y-4">
      <div className="flex justify-start space-x-2">
        <Button
          variant={selectedCountry === "India" ? "default" : "outline"}
          onClick={() => handleCountryChange("India")}
        >
          India
        </Button>
        <Button
          variant={selectedCountry === "UK" ? "default" : "outline"}
          onClick={() => handleCountryChange("UK")}
        >
          UK
        </Button>
        <Button
          variant={selectedCountry === "US" ? "default" : "outline"}
          onClick={() => handleCountryChange("US")}
        >
          US
        </Button>
        <Button
          variant={selectedCountry === "Dubai" ? "default" : "outline"}
          onClick={() => handleCountryChange("Dubai")}
        >
          Dubai
        </Button>
      </div>
      {selectedCountry !== "India" ? (
        <ComingSoonScreen
          country={selectedCountry}
          onExpressInterest={handleExpressInterest}
          isLoading={isLoading}
        />
      ) : (
        <>
          {filteredData.length > 0 ? (
            <div className="w-full overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Symbol</TableHead>
                    <TableHead className="text-right">Price</TableHead>
                    <TableHead className="text-right">24h Change</TableHead>
                    <TableHead className="text-right"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {data.map((token) => (
                    <TableRow key={token.id}>
                      <TableCell className="font-medium">
                        {token.name}
                      </TableCell>
                      <TableCell>{token.symbol}</TableCell>
                      <TableCell className="text-right">
                        ${token.in_USD.toFixed(3)}
                      </TableCell>
                      <TableCell
                        className={`text-right ${
                          token.change24h >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {token.change24h.toFixed(2)}%
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              window.open(token.external_link, "_blank");
                            }}
                          >
                            <ChartLineUp className="h-4 w-4 mr-1" />
                            View Share
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => {
                              // onViewToken(token)
                              window.open(
                                "https://solscan.io/token/" +
                                  token.contract_solana,
                                "_blank"
                              );
                            }}
                          >
                            <ExternalLink className="h-4 w-4 mr-1" />
                            Solscan
                          </Button>
                          <Button
                            size="sm"
                            disabled={token.id !== 2 ? true : false}
                            onClick={() => onSelect(token)}
                            className="disabled:opacity-50"
                          >
                            <ArrowRight className="h-4 w-4 mr-1" />
                            {token.id === 2 ? "Buy" : "Soon"}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : null}
        </>
      )}
    </div>
  );
}

function ComingSoonScreen({
  country,
  onExpressInterest,
  isLoading,
}: {
  country: Country;
  onExpressInterest: (country: Country) => Promise<void>;
  isLoading: boolean;
}) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-8 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Coming Soon to {country}</h2>
      <p className="text-gray-600">
        We're working hard to bring our services to {country}.
      </p>
      <Button onClick={() => onExpressInterest(country)} disabled={isLoading}>
        {isLoading ? "Processing..." : "Express Interest"}
      </Button>
    </div>
  );
}
